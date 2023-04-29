type notice = {
  postId: number;
  registerTime: string;
  writer: string;
  title: string;
  views: number;
  likes: number;
};

type board = {
  postId: number;
  registerTime: string;
  writer: string;
  title: string;
  views: number;
  likes: number;
};

export interface getBoardInterface {
  status: 200;
  posts: {
    notices: notice[];
    boards: board[];
  };
}
export interface getPostInterface {
  status: number;
  model: {
    registerTime: string;
    name: string;
    title: string;
    content: string;
    views: number;
    likes: number;
    like: boolean;
    comment: any[]; // comment DTO만튿어지면 수정
  };
}

export interface setPostInterface {
  kind: string;
  title: string;
  content: string;
  image: string | File;
}

export interface editPostInterface {
  title: string;
  content: string;
}
