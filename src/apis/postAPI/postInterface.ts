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
}

export interface editPostInterface {
  title: string;
  content: string;
}
