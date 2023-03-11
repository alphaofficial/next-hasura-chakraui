import { Entity, Index, PrimaryKey, Property } from "@mikro-orm/core";

export enum AppprovalStatus {
  NO_ACCESS = "NO_ACCESS",
  PENDING = "PENDING",
  DENIED = "DENIED",
  APPROVED = "APPROVED",
}
@Entity()
export class Users {
  @PrimaryKey({ columnType: "uuid", defaultRaw: `uuid_generate_v4()` })
  id!: string;

  @Property({ columnType: "text", nullable: true })
  name?: string;

  @Property({ columnType: "text", nullable: true })
  surname?: string;

  @Index({ name: "users_email_idx" })
  @Property({ columnType: "text", nullable: true })
  email?: string;

  @Property({ columnType: "text", nullable: true })
  idNumber?: string;

  @Property({ columnType: "text", nullable: true })
  password?: string;

  @Property({ length: 6, nullable: true, defaultRaw: `now()` })
  createdAt?: Date;

  @Property({ length: 6, nullable: true })
  updatedAt?: Date;

  @Index({ name: "users_deleted_at_idx" })
  @Property({ length: 6, nullable: true })
  deletedAt?: Date;

  @Index({ name: "users_facebook_provider_id_idx" })
  @Property({ columnType: "text", nullable: true })
  facebookProviderId?: string;

  @Index({ name: "users_gmail_provider_id_idx" })
  @Property({ columnType: "text", nullable: true })
  gmailProviderId?: string;

  @Property({ columnType: "text", nullable: true })
  gender?: string;

  @Index({ name: "users_mobile_idx" })
  @Property({ columnType: "text", nullable: true })
  mobile?: string;

  @Property({ length: 6, nullable: true })
  lastLoginDate?: Date;

  @Index({ name: "index_users_login_count" })
  @Property({ default: 0 })
  loginCount: number = 0;
}
