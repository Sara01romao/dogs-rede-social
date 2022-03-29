import React, { useEffect } from 'react';
import { STATS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';


const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

export default function UserStats() {
  const {data, error, loading, request} = useFetch();
  
  useEffect(()=>{
    async function getData(){
      const {url, options} = STATS_GET();
      await request(url, options)
    }
    getData();
    
  },[request])

  if(loading) return <Loading/>
  if(error) return <Error error={error}/>
  if(data)
  return (
    <React.Suspense fallback={<div><Head title="Estatísticas" /></div>}>
       <Head title="Estatísticas" />
       <UserStatsGraphs data={data}/>
     
    </React.Suspense>
  )
  else return null
}
