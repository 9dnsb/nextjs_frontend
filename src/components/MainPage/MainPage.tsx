/* eslint-disable max-lines-per-function */
// eslint-disable-next-line simple-import-sort/imports
import axios from 'axios'
import dateFormat from 'dateformat'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useState, CSSProperties } from 'react'
import { HydrationProvider, Server, Client } from 'react-hydration-provider'
import ClipLoader from 'react-spinners/ClipLoader'
import useSWR from 'swr'

import DisplayRecipeImage from '@/components/DisplayRecipeImage'
import { Recipe, RecipeArray } from '@/components/RecipesTypes'

function MainPage({ recipes }: { recipes: RecipeArray }) {
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'black',
  }

  const url = `${process.env.MY_HEROKU_URL}/api/blogs/?populate=*`
  const fetcher = () => axios.get(url).then((res) => res.data)
  const { data, error } = useSWR<RecipeArray>(url, fetcher, {
    fallbackData: recipes,
    refreshInterval: 30000,
  })
  const linkHref = (recipe: Recipe) => `/recipes/${recipe.id}`

  const [loading] = useState(true)
  const [color] = useState('#ffffff')
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <HydrationProvider>
      <main>
        <Server>
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </Server>
        <Client>
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
                This website was inspired by{' '}
                <a
                  href="https://www.littlefatboy.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  littlefatboy.com (opens in new window)
                </a>
                . Hi! Find my latest recipes, tutorials, photography, and more
                below. You will find instructions tips and videos in each
                recipe.
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
                <Link href={linkHref(recipe)} className="ViewRecipeALink">
                  View Recipe
                </Link>
              </div>
            ))}
          </div>
        </Client>
      </main>
    </HydrationProvider>
  )
}

export default MainPage
