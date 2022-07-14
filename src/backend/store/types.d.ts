

interface DefaultState{
    /** set of three random minifigs*/
    randoms: any[];
    /** Lego parts of particular selected Minifig */
    parts: any[]
    /** is the application in loading state (for React suspense) */
    loading: boolean;
    /** Which page are we viewing ? */
    selectedPage: number
    /** User selected minifig  */
    selectedMinifig: null
    
}
const React  =import('react')

type SetState = React.Dispatch<React.SetStateAction<DefaultState>>



interface DefaultPageProps{
    state: DefaultState;
    setState: SetState;
}
