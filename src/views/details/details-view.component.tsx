import { useParams } from 'react-router-dom';


interface IProps {}


const DetailsView = (props: IProps) => {
  const { id } = useParams();
  console.log('Pokemon id', id);

  return <h1>Details view works!</h1>
}

export default DetailsView;
