export class Student {
    id: string;
    name: string;
    birthDate: Date;
    email: string;
    username: string;
    passwordHash: string;
    constructor(id: string, email: string, username: string, passwordHash: string, name: string, birthDate: Date) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.passwordHash = passwordHash;
        this.name = name;
        this.birthDate = birthDate;
    }
}