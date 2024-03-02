```ts
var { User } = await bimport('tests/entities.ts');
var u = new User();
await u.set({ email: 'brayanmc.contacto@gmail.com', names: 'Pedro Sanchez' });
await u.sendEmail();
```
