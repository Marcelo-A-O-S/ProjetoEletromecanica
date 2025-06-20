import ConfigurationProjectPage from "@/components/pages/configurationProject-client";


export default async function ConfigurationPage({
    params,
  }: {
    params: Promise<{ id: number }>
  }){
    const {id} = await params;
    return  <ConfigurationProjectPage id={id}/>
}