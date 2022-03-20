import axios from 'axios'

function Recipes({ recipes }) {
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
  console.log('here2', postRes.data)
  return {
    props: {
      recipes: postRes.data,
    },
    revalidate: 10, // In seconds
  }
}
