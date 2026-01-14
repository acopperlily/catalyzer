import chooseItem from "../utils/chooseItem";
import getRandomNumber from "../utils/getRandomNumber";

type PreferencesProps = {
  verbs: string[];
  prefs: string[];
  conj: string;
  n: number;
}

const Preferences = ({ verbs, prefs, conj, n }: PreferencesProps) => {

  // Choose preferences
  const getActivities = (arr: string[], n: number): string[] => {
    const len = arr.length;

    // Check for duplicates
    let activitySet = new Set<string>();
    while (activitySet.size < n) {
      let i: number = getRandomNumber(len);
      activitySet.add(arr[i]);
    }

    return [...activitySet];
  };

  // Connect array elements into a coherent string
  const formatActivities = (arr: string[], conj: string): string => {

    // This shouldn't happen, but just in case...
    if (arr.length < 2) return arr[0] || 'stuff';

    // Add 'and' or 'or' only
    if (arr.length === 2) return `${arr[0]} ${conj} ${arr[1]}`;

    // Oxford comma, bitch
    return `${arr.slice(0, -1).join(', ')}, ${conj} ${arr.slice(-1)}`;
  };

  const verb = chooseItem(verbs);
  const preferences = formatActivities(getActivities(prefs, n), conj);

  return (
    <>{`${verb} ${preferences}. `}</>
  );
};

export default Preferences;
