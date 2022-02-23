import MarkdownIt from 'markdown-it'
export const mdLinkOpenPlugin = (md: MarkdownIt) => {
  // Remember old renderer, if overridden, or proxy to default renderer
  var defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    // If you are sure other plugins can't add `target` - drop check below
    var aIndex = tokens[idx].attrIndex('target');
    if (aIndex < 0) {
      const href = tokens[idx].attrGet('href')
      if (href && /^http/.test(href)) {
        tokens[idx].attrPush(['target', '_blank']); // add new attribute
      }
    } else {
      const attrs = tokens[idx].attrs
      if (attrs) {
        attrs[aIndex][1] = '_blank';    // replace value of existing attr
      }
     
    }
  
    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self);
  };
  
}