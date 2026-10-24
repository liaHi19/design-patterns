interface IDatabase {
  save(data: string): void;
}

class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} has been saved by mysql`);
  }
}

class MongoDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} has been saved by mongodb`);
  }
}

class HighLevelModule {
  constructor(private database: IDatabase) {}
  execute(data: string) {
    this.database.save(data);
  }
}

let mongodb = new MongoDatabase();
let mySgl = new MySqlDatabase();

let user: HighLevelModule = new HighLevelModule(mongodb);
user.execute("Natalia");

let blog: HighLevelModule = new HighLevelModule(mySgl);
blog.execute("Blog");
