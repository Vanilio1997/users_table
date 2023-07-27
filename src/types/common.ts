export interface IPost{
   userId: number;
   id: number;
   title: string;
   body: string
};

export interface ICellInfo{
   text: string
   onClick: (parametr: PostsKeys) => void
   parameter: PostsKeys
};


export type PostsKeys = 'id' | 'title' | 'body';
