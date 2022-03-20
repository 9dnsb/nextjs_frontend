import axios from 'axios'

import { RecipeArray } from '@/components/RecipesTypes'

function Recipes({ recipes }: { recipes: RecipeArray }) {
  return (
    <>
      {recipes.data.map((recipe) => (
        <h1 key={recipe.id}>here</h1>
      ))}
    </>
  )
}

export default Recipes

export async function getStaticProps() {
  const postRes = await axios.get(
    `${process.env.MY_HEROKU_URL}/api/blogs/?populate=*`,
  )
  return {
    props: {
      recipes: postRes.data,
    },
    revalidate: 10, // In seconds
  }
}
