export interface RoleUserAuth {
  role: {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
  };
}

export interface UserAuth {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  verified_email_at: Date | null;
  role_id: number;
  created_at: Date;
  updated_at: Date;
}
