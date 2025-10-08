declare module "next-auth" {
  interface Session {
    id: _string;
  }
  interface JWT {
    id: string;
  }
}
