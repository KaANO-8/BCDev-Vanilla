

static async getInitialProps() {

    const campaigns = await factory.methods.getDeployedContracts().call();

    return { campaigns };

}

async componentDidMount() {
    
    console.log(campaigns);
}