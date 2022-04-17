import useServices from '../../Hooks/useServices/useServices';
import Services from '../Home/Services/Services';

const SetServices = () => {

    const [services] = useServices([]);


    return (
        <div className="lg:ml-10 mb-10">


            <div className="grid lg:grid-cols-3">
                {
                    services.map(service => <Services
                        key={service.id}
                        service={service}
                    ></Services>)
                }
            </div>
        </div>
    );
};

export default SetServices;