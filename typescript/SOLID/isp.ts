interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

class MultiFunctionalPrinter implements Printer, Scanner, FaxMachine {
  print(document: Document): void {
    console.log("The machine is printing");
  }

  scan(document: Document): void {
    console.log("The machine is scanning");
  }
  fax(document: Document): void {
    console.log("The machine is printing");
  }
}

class SimplePrinter implements Printer {
  print(document: Document): void {
    console.log("The machine is printing");
  }
}

////
interface Post {
  id: number;
  title: string;
  content: string;
}

interface Comment {
  id: number;
  postId: number;
  title: string;
  content: string;
}

interface PostCreator {
  addPost(post: Post): void;
}

interface PostSharer {
  sharePost(post: Post): void;
}

interface CommentCreator {
  commentPost(comment: Comment): void;
}

class User implements PostSharer, CommentCreator {
  commentPost(comment: Comment): void {
    console.log("User is commenting post");
  }
  sharePost(post: Post): void {
    console.log(`${post.id} has been shared by the user`);
  }
}

class Admin implements PostCreator, PostSharer, CommentCreator {
  addPost(post: Post): void {
    console.log("Post has been added by admin");
  }
  commentPost(comment: Comment): void {
    console.log("Admin is commenting post");
  }
  sharePost(post: Post): void {
    console.log(`${post.id} has been shared by the admin`);
  }
}
