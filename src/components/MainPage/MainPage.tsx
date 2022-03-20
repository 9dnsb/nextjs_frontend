import dateFormat from 'dateformat'
import Image from 'next/image'
import Link from 'next/link'

import { RecipeArray } from '../RecipesTypes'

function MainPage({ recipes }: { recipes: RecipeArray }) {
  return (
    <>
      <div>
        <h1>Latest and Greatest Recipes and More</h1>
      </div>
      <div>
        <h2>
          Hi! Find my latest recipes, tutorials, photography, and more below.
          You will find instructions tips and videos in each recipe.
        </h2>
      </div>
      <>
        {recipes.data.map((recipe) => (
          <div key={recipe.id}>
            <Image
              src={recipe.attributes.image.data.attributes.url}
              layout="responsive"
              width="92px"
              height="115px"
            />

            <h3>{dateFormat(recipe.attributes.publishedAt, 'fullDate')}</h3>
            <Link href={`/recipes/${recipe.id}`}>
              <a id="mainALink">{recipe.attributes.title}</a>
            </Link>
            <p>{recipe.attributes.description_main}</p>
            <Link href={`/recipes/${recipe.id}`}>
              <a id="ViewRecipeALink">View Recipe</a>
            </Link>
          </div>
        ))}
      </>
    </>
  )
}

export default MainPage
