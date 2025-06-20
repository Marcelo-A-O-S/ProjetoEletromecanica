"use client"
import { ConfigurationCard } from "@/components/configuration-card";
import { ConfigurationModal } from "@/components/configuration-modal";
import { IConfiguration } from "@/domain/interfaces/IConfiguration";
import { deleteConfigurationById, getConfigurations } from "@/services/configurationServices";
import { useEffect, useState } from "react";

export default function ConfigurationsPage() {
    const [configurations, setConfigurations] = useState<IConfiguration[]>([]);
    const [configurationSelected, setConfigurationSelected] = useState<IConfiguration | null>(null);
    useEffect(() => {
        loadingData();
        
    }, [])
    useEffect(()=>{
       
    },[configurations])
    const loadingData = async () => {
        const response = await getConfigurations();
        if (response.status == 400 || response.status === 401 || response.status === 500) {
            return;
        }
        setConfigurations(response.data);
        console.log(response.data);
    }
    const onSuccess = () => {
        if (configurationSelected) {
            setConfigurationSelected(null);
        }
        loadingData();

    }
    const EditConfiguration = async (configuration: IConfiguration) => {
        setConfigurationSelected(configuration);
    }
    const DeleteConfiguration = async (id: number) => {
        const response = await deleteConfigurationById(id);
        if (response.status == 400 || response.status === 401 || response.status === 500) {
            console.error("Erro ao deletar configuração: ", response.data);
            return;
        }
        if (response.status == 200 || response.status == 201) {
            alert(response.data)
        }
        loadingData();
    }
    return (
        <main className="flex-1 mx-auto container py-6">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Configurações</h1>
                    <ConfigurationModal onSuccess={onSuccess} configuration={configurationSelected} />
                </div>
            </div>
            <div className="space-y-4 py-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {configurations.map((configuration: IConfiguration, index) => (
                        <ConfigurationCard
                            key={index}
                            onDelete={DeleteConfiguration}
                            onEdit={EditConfiguration}
                            configuration={configuration}
                            onSuccess={onSuccess}
                            
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}