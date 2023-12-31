
import { PoodlApp } from '@poodl/widget';
import { Header } from '../components';

export default function Swap() {
    return (
        <section className="swap">
            <Header />
            <h1 className="swap__title">Limitless Network Swap</h1>
            <div className="mt-20 ml-20 text-center justify-center">



                <PoodlApp
                   
                    predefinedTokens={[
                        {
                            address: "0xC13CbF50370E5EaE6f5Dd9D8a1015007f34C4eaD",
                            chainId: 56,
                            decimals: 18,
                            hasTransactonFees: true,
                            logoURI: "https://photos.google.com/search/_tra_/photo/AF1QipM1JgHzhhhT2FwKwGOz4XdR7-stqhtF5V_861t0",
                            name: "Limitless Network",
                            symbol: "LNT"
                        }
                    ]}
                    defaultPinnedTokens={{
                        56: [
                            "0xC13CbF50370E5EaE6f5Dd9D8a1015007f34C4eaD",
                            "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
                        ]
                    }}
                    defaultSelectedTokenByChains={{
                        56: {
                            defaultOutputToken: "0xC13CbF50370E5EaE6f5Dd9D8a1015007f34C4eaD"
                        }
                    }}
                />
            </div>
        </section>
    );
}
