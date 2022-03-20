import axios from 'axios'
import useSWR from 'swr'

import { RecipeSinglePost } from '@/components/RecipesTypes'

function RecipePage({ recipe }: { recipe: RecipeSinglePost }) {
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((response) => response.json())
  const { data } = useSWR<RecipeSinglePost>(
    `${process.env.MY_HEROKU_URL}/api/blogs/${recipe.data.id}/?populate=*`,
    fetcher,
    { fallbackData: recipe, refreshInterval: 30000 },
  )

  return (
    <div>
      <div>{data.data.attributes.title}</div>
    </div>
  )
}

export default RecipePage

export async function getStaticProps({ params }) {
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

  const paths = postsRes.data.data.map((post) => {
    return { params: { id: post.id.toString() } }
  })
  return {
    paths,
    fallback: 'blocking',
  }
}
