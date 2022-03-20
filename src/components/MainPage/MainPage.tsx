/* eslint-disable max-lines-per-function */
import axios from 'axios'
import dateFormat from 'dateformat'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

import { shimmer, toBase64 } from '@/components/imgBackgroundSVG'
import { RecipeArray } from '@/components/RecipesTypes'

function MainPage({ recipes }: { recipes: RecipeArray }) {
  const url = `${process.env.MY_HEROKU_URL}/api/blogs/?populate=*`
  const fetcher = () => axios.get(url).then((res) => res.data)
  const { data } = useSWR<RecipeArray>(url, fetcher, {
    fallbackData: recipes,
    refreshInterval: 30000,
  })

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
        {data.data.map((recipe) => (
          <div key={recipe.id}>
            <div id="img">
              <Link href={`/recipes/${recipe.id}`} passHref>
                <a>
                  <Image
                    src={recipe.attributes.image.data.attributes.url}
                    layout="responsive"
                    width="92px"
                    height="115px"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475),
                    )}`}
                  />
                </a>
              </Link>
            </div>
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
