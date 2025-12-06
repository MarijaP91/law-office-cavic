import PracticeHeader from "../PracticeHeader/PracticeHeader";
import PracticeList from "../PracticeList/PracticeList";
import "./PracticeLayout.css";
import PracticeFlex from "../PracticeFlex/PracticeFlex";

export default function PracticeLayout() {
  return (
    <div className="practice-layout">
      <PracticeFlex>
        <PracticeHeader>Poslovno pravo</PracticeHeader>
        <PracticeList></PracticeList>
      </PracticeFlex>
      <PracticeFlex>
        <PracticeHeader>Građansko pravo</PracticeHeader>
      </PracticeFlex>
      <PracticeFlex>
        <PracticeHeader>Krivično pravo</PracticeHeader>
      </PracticeFlex>
    </div>
  );
}
