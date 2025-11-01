import React from 'react'
import { useParams } from 'react-router-dom'

type IdsObjectType = {
    id: number;
}
type DinamicPageProps = {
    ids: IdsObjectType[];
}
const InnerDinamic = ({ids}: DinamicPageProps) => {
    const params = useParams();
    const param = ids.find(item => item.id === parseInt(params.id ?? ''))
  return (
    <div>InnerDinamic <p>{param?.id}</p></div>
  )
}

export default InnerDinamic