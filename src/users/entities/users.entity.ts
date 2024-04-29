import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ schema: "authentication", name: "users" })
export class Users {
  @PrimaryColumn()
  id: number;

  @Column()
  fullname: string;
}
