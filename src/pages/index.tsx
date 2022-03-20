import axios from 'axios'

import MainPage from '@/components/MainPage/MainPage'

function Home({ recipes }) {
  return <MainPage recipes={recipes} />
}

export default Home

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
