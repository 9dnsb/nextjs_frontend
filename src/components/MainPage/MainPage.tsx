/* eslint-disable max-lines-per-function */
// eslint-disable-next-line simple-import-sort/imports
import axios from 'axios'
import dateFormat from 'dateformat'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import useSWR from 'swr'

import DisplayRecipeImage from '@/components/DisplayRecipeImage'
import { Recipe, RecipeArray } from '@/components/RecipesTypes'

function MainPage({ recipes }: { recipes: RecipeArray }) {
  const url = `${process.env.MY_HEROKU_URL}/api/blogs/?populate=*`
  const fetcher = () => axios.get(url).then((res) => res.data)
  const { data } = useSWR<RecipeArray>(url, fetcher, {
    fallbackData: recipes,
    refreshInterval: 30000,
  })
  const linkHref = (recipe: Recipe) => `/recipes/${recipe.id}`

  return (
    <main>
      <div className="containerMainContent">
        <NextSeo
          title={"David's Blog"}
          description="A copy of a blog using Strapi"
        />

        <div>
          <h1>Latest and Greatest Recipes and More</h1>
        </div>
        <div>
          <h2>
            This is a copy of{' '}
            <a
              href="https://www.littlefatboy.com/"
              target="_blank"
              rel="noreferrer"
            >
              littlefatboy.com (opens in new window)
            </a>
            . Hi! Find my latest recipes, tutorials, photography, and more
            below. You will find instructions tips and videos in each recipe.
          </h2>
        </div>
        {data.data.map((recipe) => (
          <div key={recipe.id}>
            <div>
              <DisplayRecipeImage
                imgUrl={recipe.attributes.image.data.attributes.url}
              />
            </div>
            <h3>{dateFormat(recipe.attributes.publishedAt, 'fullDate')}</h3>

            <a className="mainALink">{recipe.attributes.title}</a>

            <p>{recipe.attributes.description_main}</p>
            <Link href={linkHref(recipe)}>
              <a className="ViewRecipeALink">View Recipe</a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default MainPage
