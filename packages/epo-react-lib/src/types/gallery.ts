import { Image } from "@/types/image";

interface GalleryItemCategory {
  id: string;
  slug: string;
  title: string;
}

interface GalleryEntry {
  galleryItemCategory: GalleryItemCategory[];
  id: string;
  image: Image[];
  title: string;
  uri: string;
}

export type { GalleryItemCategory, GalleryEntry };
