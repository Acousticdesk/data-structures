export interface IVertex {
  name: string
  edges: {
    [key: string]: IVertex;
  }
}
