import { Column, Entity, Index } from "typeorm";

@Index("users_pkey", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "now()",
  })
  updatedAt: Date;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "email" })
  email: string;

  @Column("text", { name: "password" })
  password: string;

  @Column("date", { name: "dob", nullable: true })
  dob: string | null;
}
