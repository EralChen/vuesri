const A = [["(", ")"], [")", "("], ["<", ">"], [">", "<"], ["[", "]"], ["]", "["], ["{", "}"], ["}", "{"], ["«", "»"], ["»", "«"], ["‹", "›"], ["›", "‹"], ["⁽", "⁾"], ["⁾", "⁽"], ["₍", "₎"], ["₎", "₍"], ["≤", "≥"], ["≥", "≤"], ["〈", "〉"], ["〉", "〈"], ["﹙", "﹚"], ["﹚", "﹙"], ["﹛", "﹜"], ["﹜", "﹛"], ["﹝", "﹞"], ["﹞", "﹝"], ["﹤", "﹥"], ["﹥", "﹤"]], B = ["آ", "أ", "إ", "ا"], T = ["ﻵ", "ﻷ", "ﻹ", "ﻻ"], U = ["ﻶ", "ﻸ", "ﻺ", "ﻼ"], _ = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "إ", "أ", "آ", "ة", "ى", "ل", "م", "ن", "ه", "و", "ي", "إ", "أ", "آ", "ة", "ى", "ی", "ئ", "ؤ"], L = ["ﺍ", "ﺏ", "ﺕ", "ﺙ", "ﺝ", "ﺡ", "ﺥ", "ﺩ", "ﺫ", "ﺭ", "ﺯ", "ﺱ", "ﺵ", "ﺹ", "ﺽ", "ﻁ", "ﻅ", "ﻉ", "ﻍ", "ﻑ", "ﻕ", "ﻙ", "ﻝ", "ﻡ", "ﻥ", "ﻩ", "ﻭ", "ﻱ", "ﺇ", "ﺃ", "ﺁ", "ﺓ", "ﻯ", "ﯼ", "ﺉ", "ﺅ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺉ", "ﺅ"], E$1 = ["ﺎ", "ﺐ", "ﺖ", "ﺚ", "ﺞ", "ﺢ", "ﺦ", "ﺪ", "ﺬ", "ﺮ", "ﺰ", "ﺲ", "ﺶ", "ﺺ", "ﺾ", "ﻂ", "ﻆ", "ﻊ", "ﻎ", "ﻒ", "ﻖ", "ﻚ", "ﻞ", "ﻢ", "ﻦ", "ﻪ", "ﻮ", "ﻲ", "ﺈ", "ﺄ", "ﺂ", "ﺔ", "ﻰ", "ﯽ", "ﺊ", "ﺆ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺊ", "ﺆ"], N = ["ﺎ", "ﺒ", "ﺘ", "ﺜ", "ﺠ", "ﺤ", "ﺨ", "ﺪ", "ﺬ", "ﺮ", "ﺰ", "ﺴ", "ﺸ", "ﺼ", "ﻀ", "ﻄ", "ﻈ", "ﻌ", "ﻐ", "ﻔ", "ﻘ", "ﻜ", "ﻠ", "ﻤ", "ﻨ", "ﻬ", "ﻮ", "ﻴ", "ﺈ", "ﺄ", "ﺂ", "ﺔ", "ﻰ", "ﯿ", "ﺌ", "ﺆ", "ﹱ", "ﹲ", "ﹴ", "ﹷ", "ﹹ", "ﹻ", "ﹽ", "ﹿ", "ﺀ", "ﺌ", "ﺆ"], R = ["ﺍ", "ﺑ", "ﺗ", "ﺛ", "ﺟ", "ﺣ", "ﺧ", "ﺩ", "ﺫ", "ﺭ", "ﺯ", "ﺳ", "ﺷ", "ﺻ", "ﺿ", "ﻃ", "ﻇ", "ﻋ", "ﻏ", "ﻓ", "ﻗ", "ﻛ", "ﻟ", "ﻣ", "ﻧ", "ﻫ", "ﻭ", "ﻳ", "ﺇ", "ﺃ", "ﺁ", "ﺓ", "ﻯ", "ﯾ", "ﺋ", "ﺅ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺋ", "ﺅ"], S = ["ء", "آ", "أ", "ؤ", "إ", "ا", "ة", "د", "ذ", "ر", "ز", "و", "ى"], O$1 = ["ً", "ً", "ٌ", "؟", "ٍ", "؟", "َ", "َ", "ُ", "ُ", "ِ", "ِ", "ّ", "ّ", "ْ", "ْ", "ء", "آ", "آ", "أ", "أ", "ؤ", "ؤ", "إ", "إ", "ئ", "ئ", "ئ", "ئ", "ا", "ا", "ب", "ب", "ب", "ب", "ة", "ة", "ت", "ت", "ت", "ت", "ث", "ث", "ث", "ث", "ج", "ج", "ج", "ج", "ح", "ح", "ح", "ح", "خ", "خ", "خ", "خ", "د", "د", "ذ", "ذ", "ر", "ر", "ز", "ز", "س", "س", "س", "س", "ش", "ش", "ش", "ش", "ص", "ص", "ص", "ص", "ض", "ض", "ض", "ض", "ط", "ط", "ط", "ط", "ظ", "ظ", "ظ", "ظ", "ع", "ع", "ع", "ع", "غ", "غ", "غ", "غ", "ف", "ف", "ف", "ف", "ق", "ق", "ق", "ق", "ك", "ك", "ك", "ك", "ل", "ل", "ل", "ل", "م", "م", "م", "م", "ن", "ن", "ن", "ن", "ه", "ه", "ه", "ه", "و", "و", "ى", "ى", "ي", "ي", "ي", "ي", "ﻵ", "ﻶ", "ﻷ", "ﻸ", "ﻹ", "ﻺ", "ﻻ", "ﻼ", "؟", "؟", "؟"], o = ["ء", "ف"], t = ["غ", "ي"], c = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], e = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], n = 0, p = 1, r = 2, s = 3, x$1 = 4, C$1 = 5, D$1 = 6, F = 7, M$1 = 8, P$1 = 9, W$1 = 10, a = 11, b = 12, d = 13, f = 14, g = 15, h = 16, i = 17, j$1 = 18, k$1 = ["UBAT_L", "UBAT_R", "UBAT_EN", "UBAT_AN", "UBAT_ON", "UBAT_B", "UBAT_S", "UBAT_AL", "UBAT_WS", "UBAT_CS", "UBAT_ES", "UBAT_ET", "UBAT_NSM", "UBAT_LRE", "UBAT_RLE", "UBAT_PDF", "UBAT_LRO", "UBAT_RLO", "UBAT_BN"], l = 100, m = [l + 0, n, n, n, n, l + 1, l + 2, l + 3, p, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, l + 4, x$1, x$1, x$1, n, x$1, n, x$1, n, x$1, x$1, x$1, n, n, x$1, x$1, n, n, n, n, n, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, n, n, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, n, n, x$1, x$1, n, n, x$1, x$1, n, n, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, n, n, n, l + 5, F, F, l + 6, l + 7], q$1 = [[j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, D$1, C$1, D$1, M$1, C$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, C$1, C$1, C$1, D$1, M$1, x$1, x$1, a, a, a, x$1, x$1, x$1, x$1, x$1, W$1, P$1, W$1, P$1, P$1, r, r, r, r, r, r, r, r, r, r, P$1, x$1, x$1, x$1, x$1, x$1, x$1, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x$1, x$1, x$1, x$1, x$1, x$1, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x$1, x$1, x$1, x$1, j$1, j$1, j$1, j$1, j$1, j$1, C$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, j$1, P$1, x$1, a, a, a, a, x$1, x$1, x$1, x$1, n, x$1, x$1, j$1, x$1, x$1, a, a, r, r, x$1, n, x$1, x$1, x$1, r, n, x$1, x$1, x$1, x$1, x$1, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x$1, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x$1, n, n, n, n, n, n, n, n], [n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x$1, x$1, n, n, n, n, n, n, n, x$1, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x$1, n, x$1, x$1, x$1, x$1, x$1, x$1, x$1, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, p, b, p, b, b, p, b, b, p, b, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, x$1, x$1, x$1, x$1, x$1, p, p, p, p, p, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1], [s, s, s, s, x$1, x$1, x$1, x$1, F, a, a, F, P$1, F, x$1, x$1, b, b, b, b, b, b, b, b, b, b, b, F, x$1, x$1, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, s, s, s, s, s, s, s, s, s, s, a, s, s, F, F, F, b, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, b, b, b, b, b, b, b, s, x$1, b, b, b, b, b, b, F, F, b, b, x$1, b, b, b, b, F, F, r, r, r, r, r, r, r, r, r, r, F, F, F, F, F, F], [F, F, F, F, F, F, F, F, F, F, F, F, F, F, x$1, F, F, b, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, x$1, x$1, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, b, b, b, b, b, b, b, b, b, b, b, F, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, b, b, b, b, b, b, b, b, b, p, p, x$1, x$1, x$1, x$1, p, x$1, x$1, x$1, x$1, x$1], [M$1, M$1, M$1, M$1, M$1, M$1, M$1, M$1, M$1, M$1, M$1, j$1, j$1, j$1, n, p, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, M$1, C$1, d, f, g, h, i, P$1, a, a, a, a, a, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, P$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, M$1, j$1, j$1, j$1, j$1, j$1, x$1, x$1, x$1, x$1, x$1, j$1, j$1, j$1, j$1, j$1, j$1, r, n, x$1, x$1, r, r, r, r, r, r, W$1, W$1, x$1, x$1, x$1, n, r, r, r, r, r, r, r, r, r, r, W$1, W$1, x$1, x$1, x$1, x$1, n, n, n, n, n, n, n, n, n, n, n, n, n, x$1, x$1, x$1, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1], [n, n, n, n, n, n, n, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, n, n, n, n, n, x$1, x$1, x$1, x$1, x$1, p, b, p, p, p, p, p, p, p, p, p, p, W$1, p, p, p, p, p, p, p, p, p, p, p, p, p, x$1, p, p, p, p, p, x$1, p, x$1, p, p, x$1, p, p, x$1, p, p, p, p, p, p, p, p, p, p, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F], [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, b, b, b, b, b, b, b, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, P$1, x$1, P$1, x$1, x$1, P$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, a, x$1, x$1, W$1, W$1, x$1, x$1, x$1, x$1, x$1, a, a, x$1, x$1, x$1, x$1, x$1, F, F, F, F, F, x$1, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, x$1, x$1, j$1], [x$1, x$1, x$1, a, a, a, x$1, x$1, x$1, x$1, x$1, W$1, P$1, W$1, P$1, P$1, r, r, r, r, r, r, r, r, r, r, P$1, x$1, x$1, x$1, x$1, x$1, x$1, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x$1, x$1, x$1, x$1, x$1, x$1, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x$1, x$1, x$1, n, n, n, n, n, n, x$1, x$1, n, n, n, n, n, n, x$1, x$1, n, n, n, n, n, n, x$1, x$1, n, n, n, x$1, x$1, x$1, a, a, x$1, x$1, x$1, a, a, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1, x$1]];
class C {
  constructor() {
    this.inputFormat = "ILYNN", this.outputFormat = "VLNNN", this.sourceToTarget = [], this.targetToSource = [], this.levels = [];
  }
  bidiTransform(t2, r2, e2) {
    if (this.sourceToTarget = [], this.targetToSource = [], !t2)
      return "";
    if (ot(this.sourceToTarget, this.targetToSource, t2.length), !this.checkParameters(r2, e2))
      return t2;
    r2 = this.inputFormat, e2 = this.outputFormat;
    let n2 = t2;
    const o2 = ct, i2 = rt(r2.charAt(1)), u = rt(e2.charAt(1)), s2 = ("I" === r2.charAt(0) ? "L" : r2.charAt(0)) + i2, a2 = ("I" === e2.charAt(0) ? "L" : e2.charAt(0)) + u, f2 = r2.charAt(2) + e2.charAt(2);
    o2.defInFormat = s2, o2.defOutFormat = a2, o2.defSwap = f2;
    const c2 = V(t2, s2, a2, f2, o2);
    let l2 = false;
    return "R" === e2.charAt(1) ? l2 = true : "C" !== e2.charAt(1) && "D" !== e2.charAt(1) || (l2 = "rtl" === this.checkContextual(c2)), this.sourceToTarget = st, this.targetToSource = it(this.sourceToTarget), at = this.targetToSource, n2 = r2.charAt(3) === e2.charAt(3) ? c2 : "S" === e2.charAt(3) ? I(l2, c2, true) : k(c2, l2, true), this.sourceToTarget = st, this.targetToSource = at, this.levels = ft, n2;
  }
  _inputFormatSetter(t2) {
    if (!At.test(t2))
      throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
    this.inputFormat = t2;
  }
  _outputFormatSetter(t2) {
    if (!At.test(t2))
      throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
    this.outputFormat = t2;
  }
  checkParameters(t2, r2) {
    return t2 ? this._inputFormatSetter(t2) : t2 = this.inputFormat, r2 ? this._outputFormatSetter(r2) : r2 = this.outputFormat, t2 !== r2;
  }
  checkContextual(t2) {
    let r2 = x(t2);
    if ("ltr" !== r2 && "rtl" !== r2) {
      try {
        r2 = document.dir.toLowerCase();
      } catch (e2) {
      }
      "ltr" !== r2 && "rtl" !== r2 && (r2 = "ltr");
    }
    return r2;
  }
  hasBidiChar(t2) {
    return gt.test(t2);
  }
}
function V(t2, r2, e2, n2, o2) {
  const i2 = E(t2, { inFormat: r2, outFormat: e2, swap: n2 }, o2);
  if (i2.inFormat === i2.outFormat)
    return t2;
  r2 = i2.inFormat, e2 = i2.outFormat, n2 = i2.swap;
  const u = r2.substring(0, 1), s2 = r2.substring(1, 4), a2 = e2.substring(0, 1), f2 = e2.substring(1, 4);
  if (o2.inFormat = r2, o2.outFormat = e2, o2.swap = n2, "L" === u && "VLTR" === e2) {
    if ("LTR" === s2)
      return o2.dir = Tt, y(t2, o2);
    if ("RTL" === s2)
      return o2.dir = Lt, y(t2, o2);
  }
  if ("V" === u && "V" === a2)
    return o2.dir = "RTL" === s2 ? Lt : Tt, M(t2, o2);
  if ("L" === u && "VRTL" === e2)
    return "LTR" === s2 ? (o2.dir = Tt, t2 = y(t2, o2)) : (o2.dir = Lt, t2 = y(t2, o2)), M(t2);
  if ("VLTR" === r2 && "LLTR" === e2)
    return o2.dir = Tt, y(t2, o2);
  if ("V" === u && "L" === a2 && s2 !== f2)
    return t2 = M(t2), "RTL" === s2 ? V(t2, "LLTR", "VLTR", n2, o2) : V(t2, "LRTL", "VRTL", n2, o2);
  if ("VRTL" === r2 && "LRTL" === e2)
    return V(t2, "LRTL", "VRTL", n2, o2);
  if ("L" === u && "L" === a2) {
    const r3 = o2.swap;
    return o2.swap = r3.substr(0, 1) + "N", "RTL" === s2 ? (o2.dir = Lt, t2 = y(t2, o2), o2.swap = "N" + r3.substr(1, 2), o2.dir = Tt, t2 = y(t2, o2)) : (o2.dir = Tt, t2 = y(t2, o2), o2.swap = "N" + r3.substr(1, 2), t2 = V(t2, "VLTR", "LRTL", o2.swap, o2)), t2;
  }
  return t2;
}
function E(t2, r2, e2) {
  if (void 0 === r2.inFormat && (r2.inFormat = e2.defInFormat), void 0 === r2.outFormat && (r2.outFormat = e2.defOutFormat), void 0 === r2.swap && (r2.swap = e2.defSwap), r2.inFormat === r2.outFormat)
    return r2;
  const n2 = r2.inFormat.substring(0, 1), o2 = r2.outFormat.substring(0, 1);
  let i2, u = r2.inFormat.substring(1, 4), s2 = r2.outFormat.substring(1, 4);
  return "C" === u.charAt(0) && (i2 = x(t2), u = "ltr" === i2 || "rtl" === i2 ? i2.toUpperCase() : "L" === r2.inFormat.charAt(2) ? "LTR" : "RTL", r2.inFormat = n2 + u), "C" === s2.charAt(0) && (i2 = x(t2), "rtl" === i2 ? s2 = "RTL" : "ltr" === i2 ? (i2 = O(t2), s2 = i2.toUpperCase()) : s2 = "L" === r2.outFormat.charAt(2) ? "LTR" : "RTL", r2.outFormat = o2 + s2), r2;
}
function I(t2, r2, e2) {
  if (0 === r2.length)
    return "";
  void 0 === t2 && (t2 = true), void 0 === e2 && (e2 = true);
  const n2 = (r2 = String(r2)).split("");
  let o2 = 0, i2 = 1, u = n2.length;
  t2 || (o2 = n2.length - 1, i2 = -1, u = 1);
  const s2 = j(n2, o2, i2, u, e2);
  let a2 = "";
  for (let f2 = 0; f2 < n2.length; f2++)
    e2 && W(s2, s2.length, f2) > -1 ? (ut(at, f2, !t2, -1), st.splice(f2, 1)) : a2 += n2[f2];
  return a2;
}
function j(t2, r2, e2, n2, o2) {
  let i2 = 0;
  const u = [];
  let s2 = 0;
  for (let a2 = r2; a2 * e2 < n2; a2 += e2)
    if (Z(t2[a2]) || tt(t2[a2])) {
      if ("ل" === t2[a2] && q(t2, a2 + e2, e2, n2)) {
        t2[a2] = nt(t2[a2 + e2], 0 === i2 ? T : U), a2 += e2, et(t2, a2, e2, n2), o2 && (u[s2] = a2, s2++), i2 = 0;
        continue;
      }
      const r3 = t2[a2];
      1 === i2 ? t2[a2] = $(t2, a2 + e2, e2, n2) ? Q(t2[a2]) : X(t2[a2], E$1) : true === $(t2, a2 + e2, e2, n2) ? t2[a2] = X(t2[a2], R) : t2[a2] = X(t2[a2], L), tt(r3) || (i2 = 1), true === K(r3) && (i2 = 0);
    } else
      i2 = 0;
  return u;
}
function x(t2) {
  const r2 = /[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t2);
  return r2 ? r2[0] <= "z" ? "ltr" : "rtl" : "";
}
function O(t2) {
  const r2 = t2.split("");
  return r2.reverse(), x(r2.join(""));
}
function k(e2, n2, o2) {
  if (0 === e2.length)
    return "";
  void 0 === o2 && (o2 = true), void 0 === n2 && (n2 = true);
  let i2 = "";
  const u = (e2 = String(e2)).split("");
  for (let s2 = 0; s2 < e2.length; s2++) {
    let a2 = false;
    if (u[s2] >= "ﹰ" && u[s2] < "\uFEFF") {
      const f2 = e2.charCodeAt(s2);
      u[s2] >= "ﻵ" && u[s2] <= "ﻼ" ? (n2 ? (s2 > 0 && o2 && " " === u[s2 - 1] ? i2 = i2.substring(0, i2.length - 1) + "ل" : (i2 += "ل", a2 = true), i2 += B[(f2 - 65269) / 2]) : (i2 += B[(f2 - 65269) / 2], i2 += "ل", s2 + 1 < e2.length && o2 && " " === u[s2 + 1] ? s2++ : a2 = true), a2 && (ut(at, s2, true, 1), st.splice(s2, 0, st[s2]))) : i2 += O$1[f2 - 65136];
    } else
      i2 += u[s2];
  }
  return i2;
}
function y(t2, r2) {
  const e2 = t2.split(""), n2 = [];
  return D(e2, n2, r2), P(e2, n2, r2), G(2, e2, n2, r2), G(1, e2, n2, r2), ft = n2, e2.join("");
}
function D(t2, r2, i2) {
  const u = t2.length, s2 = i2.dir ? e : c;
  let a2 = 0, f2 = -1;
  const c$1 = [], l2 = [];
  i2.hiLevel = i2.dir, i2.lastArabic = false, i2.hasUbatAl = false, i2.hasUbatB = false, i2.hasUbatS = false;
  for (let e2 = 0; e2 < u; e2++)
    c$1[e2] = z(t2[e2]);
  for (let e2 = 0; e2 < u; e2++) {
    const n2 = a2, u2 = H(t2, c$1, l2, e2, i2);
    l2[e2] = u2, a2 = s2[n2][u2];
    const h2 = 240 & a2;
    a2 &= 15;
    const T2 = s2[a2][lt];
    if (r2[e2] = T2, h2 > 0)
      if (16 === h2) {
        for (let t3 = f2; t3 < e2; t3++)
          r2[t3] = 1;
        f2 = -1;
      } else
        f2 = -1;
    if (s2[a2][ht])
      -1 === f2 && (f2 = e2);
    else if (f2 > -1) {
      for (let t3 = f2; t3 < e2; t3++)
        r2[t3] = T2;
      f2 = -1;
    }
    c$1[e2] === C$1 && (r2[e2] = 0), i2.hiLevel |= T2;
  }
  i2.hasUbatS && Y(c$1, r2, u, i2);
}
function Y(t2, r2, e2, n2) {
  for (let o2 = 0; o2 < e2; o2++)
    if (t2[o2] === D$1) {
      r2[o2] = n2.dir;
      for (let e3 = o2 - 1; e3 >= 0 && t2[e3] === M$1; e3--)
        r2[e3] = n2.dir;
    }
}
function P(t2, r2, e2) {
  if (0 !== e2.hiLevel && e2.swap.substr(0, 1) !== e2.swap.substr(1, 2))
    for (let n2 = 0; n2 < t2.length; n2++)
      1 === r2[n2] && (t2[n2] = J(t2[n2]));
}
function z(t2) {
  const r2 = t2.charCodeAt(0), e2 = m[r2 >> 8];
  return e2 < l ? e2 : q$1[e2 - l][255 & r2];
}
function M(t2, r2) {
  const e2 = t2.split("");
  if (r2) {
    const t3 = [];
    D(e2, t3, r2), ft = t3;
  }
  return e2.reverse(), st.reverse(), e2.join("");
}
function W(t2, r2, e2) {
  for (let n2 = 0; n2 < r2; n2++)
    if (t2[n2] === e2)
      return n2;
  return -1;
}
function Z(t$1) {
  for (let r2 = 0; r2 < o.length; r2++)
    if (t$1 >= o[r2] && t$1 <= t[r2])
      return true;
  return false;
}
function $(t2, r2, e2, n2) {
  for (; r2 * e2 < n2 && tt(t2[r2]); )
    r2 += e2;
  return !!(r2 * e2 < n2 && Z(t2[r2]));
}
function q(r2, e2, n2, o2) {
  for (; e2 * n2 < o2 && tt(r2[e2]); )
    e2 += n2;
  let i2 = " ";
  if (!(e2 * n2 < o2))
    return false;
  i2 = r2[e2];
  for (let u = 0; u < B.length; u++)
    if (B[u] === i2)
      return true;
  return false;
}
function G(t2, r2, e2, n2) {
  if (n2.hiLevel < t2)
    return;
  if (1 === t2 && n2.dir === Lt && !n2.hasUbatB)
    return r2.reverse(), void st.reverse();
  const o2 = r2.length;
  let i2, u, s2, a2, f2, c2 = 0;
  for (; c2 < o2; ) {
    if (e2[c2] >= t2) {
      for (i2 = c2 + 1; i2 < o2 && e2[i2] >= t2; )
        i2++;
      for (u = c2, s2 = i2 - 1; u < s2; u++, s2--)
        a2 = r2[u], r2[u] = r2[s2], r2[s2] = a2, f2 = st[u], st[u] = st[s2], st[s2] = f2;
      c2 = i2;
    }
    c2++;
  }
}
function H(t2, r$1, e2, n$1, i2) {
  const u = r$1[n$1];
  return { UBAT_L: () => (i2.lastArabic = false, n), UBAT_R: () => (i2.lastArabic = false, p), UBAT_ON: () => x$1, UBAT_AN: () => s, UBAT_EN: () => i2.lastArabic ? s : r, UBAT_AL: () => (i2.lastArabic = true, i2.hasUbatAl = true, p), UBAT_WS: () => x$1, UBAT_CS: () => {
    let t3, o2;
    return n$1 < 1 || n$1 + 1 >= r$1.length || (t3 = e2[n$1 - 1]) !== r && t3 !== s || (o2 = r$1[n$1 + 1]) !== r && o2 !== s ? x$1 : (i2.lastArabic && (o2 = s), o2 === t3 ? o2 : x$1);
  }, UBAT_ES: () => (n$1 > 0 ? e2[n$1 - 1] : C$1) === r && n$1 + 1 < r$1.length && r$1[n$1 + 1] === r ? r : x$1, UBAT_ET: () => {
    if (n$1 > 0 && e2[n$1 - 1] === r)
      return r;
    if (i2.lastArabic)
      return x$1;
    let t3 = n$1 + 1;
    const o2 = r$1.length;
    for (; t3 < o2 && r$1[t3] === a; )
      t3++;
    return t3 < o2 && r$1[t3] === r ? r : x$1;
  }, UBAT_NSM: () => {
    if ("VLTR" === i2.inFormat) {
      const e3 = r$1.length;
      let o2 = n$1 + 1;
      for (; o2 < e3 && r$1[o2] === b; )
        o2++;
      if (o2 < e3) {
        const e4 = t2[n$1].charCodeAt(0), i3 = e4 >= 1425 && e4 <= 2303 || 64286 === e4, u2 = r$1[o2];
        if (i3 && (u2 === p || u2 === F))
          return p;
      }
    }
    return n$1 < 1 || r$1[n$1 - 1] === C$1 ? x$1 : e2[n$1 - 1];
  }, UBAT_B: () => (i2.lastArabic = true, i2.hasUbatB = true, i2.dir), UBAT_S: () => (i2.hasUbatS = true, x$1), UBAT_LRE: () => (i2.lastArabic = false, x$1), UBAT_RLE: () => (i2.lastArabic = false, x$1), UBAT_LRO: () => (i2.lastArabic = false, x$1), UBAT_RLO: () => (i2.lastArabic = false, x$1), UBAT_PDF: () => (i2.lastArabic = false, x$1), UBAT_BN: () => x$1 }[k$1[u]]();
}
function J(t2) {
  let r2, e2 = 0, n2 = A.length - 1;
  for (; e2 <= n2; )
    if (r2 = Math.floor((e2 + n2) / 2), t2 < A[r2][0])
      n2 = r2 - 1;
    else {
      if (!(t2 > A[r2][0]))
        return A[r2][1];
      e2 = r2 + 1;
    }
  return t2;
}
function K(t2) {
  for (let r2 = 0; r2 < S.length; r2++)
    if (S[r2] === t2)
      return true;
  return false;
}
function Q(t2) {
  for (let r2 = 0; r2 < _.length; r2++)
    if (t2 === _[r2])
      return N[r2];
  return t2;
}
function X(t2, r2) {
  for (let e2 = 0; e2 < _.length; e2++)
    if (t2 === _[e2])
      return r2[e2];
  return t2;
}
function tt(t2) {
  return t2 >= "ً" && t2 <= "ٕ";
}
function rt(t2) {
  return "L" === t2 ? "LTR" : "R" === t2 ? "RTL" : "C" === t2 ? "CLR" : "D" === t2 ? "CRL" : "";
}
function et(t2, r2, e2, n2) {
  for (; r2 * e2 < n2 && tt(t2[r2]); )
    r2 += e2;
  return r2 * e2 < n2 && (t2[r2] = " ", true);
}
function nt(r2, e2) {
  for (let n2 = 0; n2 < B.length; n2++)
    if (r2 === B[n2])
      return e2[n2];
  return r2;
}
function ot(t2, r2, e2) {
  st = [], ft = [];
  for (let n2 = 0; n2 < e2; n2++)
    t2[n2] = n2, r2[n2] = n2, st[n2] = n2;
}
function it(t2) {
  const r2 = new Array(t2.length);
  for (let e2 = 0; e2 < t2.length; e2++)
    r2[t2[e2]] = e2;
  return r2;
}
function ut(t2, r2, e2, n2) {
  for (let o2 = 0; o2 < t2.length; o2++)
    (t2[o2] > r2 || !e2 && t2[o2] === r2) && (t2[o2] += n2);
}
let st = [], at = [], ft = [];
const ct = { dir: 0, defInFormat: "LLTR", defoutFormat: "VLTR", defSwap: "YN", inFormat: "LLTR", outFormat: "VLTR", swap: "YN", hiLevel: 0, lastArabic: false, hasUbatAl: false, hasBlockSep: false, hasSegSep: false, defOutFormat: "" }, lt = 5, ht = 6, Tt = 0, Lt = 1, At = /^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/, gt = /[\u0591-\u06ff\ufb1d-\ufefc]/;
export {
  C
};
