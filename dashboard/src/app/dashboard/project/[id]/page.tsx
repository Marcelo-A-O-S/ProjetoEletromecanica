import ConfigurationProjectPage from "@/components/pages/configurationProject-client"

export default async function ProjectExecutePage({
    params,
  }: {
    params: Promise<{ id: number }>
  }){
    const {id} = await params;
    return(<>
    </>)
}