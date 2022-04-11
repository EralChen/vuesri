const tabs = [
  { name: 'aa' },
  { name: 'bb' },
  { name: 'cc' },
] as const

type TabsName<T> = T extends  Tuple<{ name: infer P }>  ? P : T;

type Name = TabsName<typeof tabs>

