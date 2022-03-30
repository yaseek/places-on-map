export type TNeed = {
  id: number;
  name: string;
  description?: string;
  rating: number;
}

export type TPoint = {
  latitude: number;
  longitude: number;
  name: string;
  description?: string;
  address?: string;
  open?: string;
  needs: TNeed[];
}
