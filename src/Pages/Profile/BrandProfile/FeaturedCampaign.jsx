import React from "react";
import { Link } from "react-router-dom";

const FeaturedCampaign = () => {
  return (
    <Link
      to={"/brand-profile"}
      className="w-81 p-2.5 shadow bg-white rounded-xl flex flex-col items-start"
    >
      <img
        className="rounded-2xl w-full h-39"
        src="https://i.ibb.co/6XxfhSr/Rectangle-6643.jpg"
        alt=""
      />
      <div className="flex justify-between items-start mt-2">
        <div>
          <h4 className="font-mulish font-normal text-sm leading-5">
            He popularity of this megastar fashion house evident
          </h4>
        </div>
        <div className="relative top-3 -left-2 w-13 ml-6 flex items-center">
          <img
            className="absolute left-0 w-5 h-5 rounded-full"
            src="https://cdn.vox-cdn.com/uploads/chorus_image/image/44336734/fujifilmx100t-1.0.0.jpg"
            alt=""
          />
          <img
            className="absolute left-2 z-0 w-5 h-5 rounded-full"
            src="https://i.ibb.co/HFNyMtV/Rectangle-6614.png"
            alt=""
          />
          <img
            className="absolute left-4 w-5 rounded-full"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAmQSURBVHgBlVhbbFTXFV3n3Me87Hn6Rfwa7EANhuLQllQoSieRIkBVFfjob1MU9SP5of7go1+GP6R+mFZK3YaotGoeSloVojYSoUoxTZNSXMWmBOMEHMa8bMA2M8Yznte9J/uce+94DEaQse/c997rrL323ucMwzf4HB08Fc1z6yXNRp8QVh9dSkKIqAD9MZ5hEGk6SNtMO15m5dP9/bvSj2ubPc5DQ4OnUhrnAwJICdgg5/QinUkAVTPOka1uc3VHWDheYfav+ve/MPwoH+wRAJIaN4+CI7X8sAPgztwMRs6NYOLSOdy9OwMdJbQ0NmPrlu2IRBoRja1BJNwsMUPYOG4Z6O/vfy79jYG8/tqZfWTlAD0QZWz5McYE/jv6Cf7yz49RXpwDs/KwdROGrsFvLRCgPB0zREMmup7chmefe4le0siUyBBbB/v3/+Dwav601S4eeW1kgDweYpz7OdfAGadT2uh48vIY3v7bX2Fr9dA0PwxrHkYogmiiA431EXTEAiQTHbfmc5id/hKFwgK6122TQ/CTkZ27dryMEx/+/vQjgRwZGh0gAg5IxwoAJzZokyAq5TzefO93yFZCSgwsdxmRxjb09j6DzclubGpLYEtnAza0hMFIJzdLMSze+hzrNz0LMxCmgErtsNSuHT8jMG+cfiiQ1387uo9AHOLkmNMB5w4LHiMXzn+MkdEzxLQPMPyoa+7CEz3Po6OpDS1BHYkAQ50/gHhdEF0tOvTCbczlOZqbWxBr6IIMsQozQ2rHCy9nPzz5xhnPN/cOhoZGkzSKAzIUTG063ZV7AqFpars4fpZeqJD4Cgg2kPO2TZiObsWc1kHAwvR4EJpRT6OPo21NO1JPdaIzEcD0jUs0KEPZZBQ20MY0Y2BwcDT5ABCN6YPkjIRJTmmjN+lfh9IIl8TZmL51nXRBTJlBrFn7NOxACxkPoiRMypkAbB4gQyZMQyfC6hGJN2HbxiRmpifdwRlkV3cAcSNKyI+uAHLkyPkUaWE3JG0EAG5I1LELbKmQg2Ux5CuAL9EDn25A+KOoF0WEuAWDjEvxWsKHiu2DXdYoewJobYqq+FPBc2xJMMxQrNB56peD51MSg65SUmj7pChVZlB6erF0NpWzWLyXwWKxJNMQoXAUIZ2CVCpBvzeBBbGETDyAhuYE2TYxdy+LG7dmwMUdREg74TBdV85lTSH7HMqOLDA64wPkYZgPDV1Mkg52q7vSsaLN1YmXtrTZ9GcEI2AU/8a2PvByGcKIoMUvsDl0DbaVwUQ+jKa6JfjFFO4VbMQirTLh0Ny6gQB6mtMhJNuKacmDniKtRLmmaSkoZ44Wap0rcNzZR2LtiG78EXyhJtRTxhR8CVgzY0hfHccSsTiZD+AzqxE+YxEZYuTk+av419h55AsVtCe3KscqAMzTiO4mhA7bCP9UJ+cvOtJYDgdXynHC4lVVJgxorSmsJ2YCBLhsU7q2bUXCBALsDjEQR8mukGMba1vr8eNQH9bUzyIeKmCcJRxNcKE6BBOySTqtgnFZXdgWAsKSTm6zFdqoFn95TrtgXQg+O4N8vBfNhgE/vW5EnkS0chUL5QYs+psQZ2WUigytCT+CIT/56US4bp5Kf4IyitwJlXxVAE7/lF+sT/KedEDUhMQDUNUNh069pC0Wgwg2UagNyhKBEjNxF43EBFDHSgTEooGHwEiQQf0mYmEfAbOh+SMq9AxOBqqMZI5m5CaYlqQCyqPLmmDLgvVeUsCc69uT9WgyNZTKOQotQyU/QzUEaA8WEbbLKGSvopj9EtmFLHK5BRrxPBZFmPoS8ecBcIWqqjUcv3Qc5ajVQZURLzzMMaBGw9EQ1vHDZAGmfRclM4ygnUWFVzCBbhSMODa3NMEX3ohw43oS90aUCxlkfT0uA9y1w6oAmJsIssZIfjJ0FgVbdi5zTqxo/awKLtrYjuLiadh1vZQE1PTtIpZyObSU5sFvf4Vi5DZmywXE434ILYacr0O9V7UntWLLaRNz9KEigQyFhqXh4hRuCGqFKxSoZdY41YPejd8lrBaWtABCxdtUSW16JoSwmUCdSaxQG7BtC4uBHmoHYdwfes8mqgNEWmr3HKsKk6+YKnlM1LIl025Ddy9mdT9KVglZVoeIblOaCgpJHohRQas3ofnqMWd+2wXhZqFnD8sMy/sC2pTUyNiya3EfCNQ8zFxM3Kk5FPaLJMJCZQk2le8Cj8IMdaK5qZ36XhDTwZ0QZswdWK3zGg2Cezo8xmGV/yBP7GrKsvtAeLH1RiRQKNNUoFIhJkK4Ruk8T9OCRmscvvLnKC9dIG2EUAx015SBlXbv92OXrdN87961GaJlWE6EZMVb7SNpY+6t3OIizk7dRo6eDVBgO8wA/IEoFbEGfKtDJ5GGUKGQLcxfX2mkVvwr77zf/0osraoXdcKDLidVh7WPS2FJ8V24eA6HfvNrvP/RCdwoFJGhkh6nKUCHQaBkG2FBVCqUArOX8MG7+3Ej/Vmt/5qqvUJ7h1d4e+ut6VM0FUip3Hb7DnetXE5P4M8fHMMXk1/B1IOqtlhyOknLhoZIDGsiIXSFSngisIDcQhr/++Iy8vmcqribv7MHW763B41r1qkiWZF9RqavUMuj46/+JLhnBZB33plOUvsZJQA0k3EuT1wex9//cQyTV8apyRk06dEVCK46KXMWUbCIMQt+YiZI+4BGcxSRI4eGM++lZ0vkuKGhFZ1dW2iJ8bTa0wQpQ9XwqVf2BtIPhOvNt2d+DliDI/8/i5OffIQrU1cUcjWBFnJGItSe0k32B2d9R18at+FjtHE55SRgVhEG7XWqunLVJyFXbKbagXQZqavD5r7n+9/70/7DD9EN0LP91QPpa1MDqogp8XpK152YKiC2k87CERWlHkzamwTIJAHrrAIDZbdyOovTsgUFRr6kMXHwevrTA7V+H1jXzF4bGdaj62T9TXGvrng+q9kjabLVnsuSKLuCwxP5tT2JO8pX3Z4CKNfDwkmMm1MrQawKRH4q2UsEpjtLs9Lvk7z8KjzumrfqBFLTzpKJRkgsWGTMVozJ1TdzF+iKPVsNKUMs/2Jm6tNDq/lcFYj8WNnJM6Fg57tMs5NktMdLNzk+zQ0O92odsSBntVw4LDhdSzitRbLA2HAF1q6Z9H9OPMzfY/0sEW17JmUxcx8tGnY70zwXAJwpnyxGOoHR3SkgJbdii0Y5TLdID/8efpSPxwJSBZTcmSyXrZTg9otMMJpVWUl5WY6e5kkZjdOPNBBjum2PFTn/YyY9nHlc218Dx0J5ArFTmqcAAAAASUVORK5CYII="
            alt=""
          />
          <div className="absolute left-6 w-5 text-xs font-light rounded-full bg-gray-700 text-white p-0.5">
            5+
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCampaign;
