export class UserLogin {
  constructor(
    public id: number,
    public name: string,
    public password: string,
    public remember?: boolean
  ) {}
}
