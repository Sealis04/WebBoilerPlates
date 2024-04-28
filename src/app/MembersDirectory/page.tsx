import DirectoryList from "../_components/directoryList";
import { Page } from "../_components/pagedefault";

export default async function Home(){
    return (
      <div>
        <Page>
          <DirectoryList />
        </Page>
      </div>
    );
}