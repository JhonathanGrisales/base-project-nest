import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  constructor() {}
  login() {
    return "This action adds a new auth";
  }
}
