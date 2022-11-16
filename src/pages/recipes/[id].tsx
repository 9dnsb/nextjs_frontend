/* eslint-disable react/no-danger */
import axios from 'axios'
import MarkdownIt from 'markdown-it'
import { NextSeo } from 'next-seo'
import useSWR from 'swr'

import DisplayRecipeImage from '@/components/DisplayRecipeImage'
import { Recipe, RecipeSinglePost } from '@/components/RecipesTypes'

function RecipePage({ recipe }: { recipe: RecipeSinglePost }) {
  const url = `${process.env.MY_HEROKU_URL}/api/blogs/${recipe.data.id}/?populate=*`
  const fetcher = () => axios.get(url).then((res) => res.data)
  const { data, error } = useSWR<RecipeSinglePost>(url, fetcher, {
    fallbackData: recipe,
    refreshInterval: 30000,
  })
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  const md = new MarkdownIt()
  // eslint-disable-next-line testing-library/render-result-naming-convention
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const htmlContent = md.render(data.data.attributes.posting)

  return (
    <div id="recipePage">
      <main>
        <NextSeo
          title={data.data.attributes.title}
          description={data.data.attributes.description_main}
        />
        <div className="containerMainContent">
          <div id="recipePageInfo">
            <h1>{data.data.attributes.title}</h1>
            <h2 id="descriptionMain">
              {data.data.attributes.description_main}
            </h2>
            <h2 id="yield">{data.data.attributes.description_yield}</h2>
          </div>
          <div>
            <DisplayRecipeImage
              imgUrl={data.data.attributes.image.data.attributes.url}
            />
          </div>
        </div>
        <section
          id="mainContent"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </main>
    </div>
  )
}

export default RecipePage

export async function getStaticProps({ params }: { params: Recipe }) {
  const postRes = await axios.get(
    `${process.env.MY_HEROKU_URL}/api/blogs/${params.id}/?populate=*`,
  )
  return {
    props: {
      recipe: postRes.data,
    },
    revalidate: 10, // In seconds
  }
}

export async function getStaticPaths() {
  const postsRes = await axios.get(`${process.env.MY_HEROKU_URL}/api/blogs`)

  const paths = postsRes.data.data.map((post: Recipe) => {
    return { params: { id: post.id.toString() } }
  })
  return {
    paths,
    fallback: 'blocking',
  }
}
