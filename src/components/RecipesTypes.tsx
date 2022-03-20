type Image = {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
  provider_metadata: {
    public_id: string
    resource_type: string
  }
}

type Recipe = {
  id: number
  attributes: {
    title: string
    posting: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    description_main: string
    description_yield: string
    image: {
      data: {
        id: number
        attributes: {
          name: string
          alternativeText: string
          caption: string
          width: number
          height: number
          formats: {
            large: Image
            small: Image
            medium: Image
            thumbnail: Image
          }
          hash: string
          ext: string
          mime: string
          size: number
          url: string
          previewUrl: null
          provider: string
          provider_metadata: {
            public_id: string
            resource_type: string
          }
          createdAt: string
          updatedAt: string
        }
      }
    }
  }
}

type Meta = {
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

type RecipeArray = {
  data: Recipe[]
  meta: Meta
}

type RecipeSinglePost = {
  data: Recipe
  meta: Meta
}

export type { Image, Recipe, RecipeArray, RecipeSinglePost }
