import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import blogApi from "Utils/api";
import Post from "./Post";
import CommentSection from "./CommentSection";

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const api = blogApi();

  useEffect(() => {
    async function getPost() {
      try {
        const data = await api.getPost(postId);
        setPost(data);
      } catch (err) {
        throw Error("Error getting post at blog", err);
      }
    }
    getPost();
  }, []);

  let text = `Born Haralambos Monroe Koutoukas in Endicott, New York, Koutoukas moved to Manhattan in the early 1960s to pursue theater.[2] A prolific playwright, Koutoukas helped establish Off-Off Broadway venues such as La MaMa Experimental Theatre Club and the Caffe Cino with low-budget, absurdist works he liked to call "camp".[1] In 1975 he said, "we... get together a play in a weekend, rehearse on a rooftop, rummage through the garbage for our props and, if we needed extra cash, we hustled our bodies in the streets. We men, that is — we didn’t think we should ask the women to do it."[1]Describing Koutoukas' unusual artistic approach to theater, William Grimes of The New York Times wrote, "In works like Medea in the Laundromat and Awful People Are Coming Over So We Must Be Pretending to Be Hard at Work and Hope They Will Go Away, [Koutoukas] presented cartoonishly stylized characters, equipped them with arch dialogue and set them loose in outlandish situations. He obeyed no rules but those that one of his characters called 'the ancient laws of glitter.'"[1] Though renowned in lower Manhattan, he never became as commercially successful as some of his contemporaries, such as Lanford Wilson or Sam Shepard.[2] His works include Afamis Notes, The Brown Book, Butterfly Encounter and Turtles Don’t Dream.[3] One play, Disarming Attachments, he described like this:The play opens with this ruined Greek philosopher. Whenever he smiles his teeth are so bad that you see the Acropolis. He lives in a Greek take out paper cup with the Acropolis on it. And then there’s Malvina Falkland who has buck teeth: she throws them into the ocean so the Penguins can escape to the Antarctic. She is in love with this Ghetto type character; he’s a vineyard owner and then Attila the Hun comes in wearing carrier-ship battle shoes and she dances with the five headed general who always talks you to death. Then there’s the boy who’s just seen the abyss and can’t get over it.[3]In 1966, he received a Village Voice Obie Award for "Assaulting Established Tradition".[4] Koutoukas also ran a theater workshop called the "School for Gargoyles" whose alumni included Gerome Ragni and James Rado, the writers of the rock musical Hair; Tom O'Horgan, the director of Hair; and the actor and playwright Harvey Fierstein.[1] Fierstein also performed Koutoukas's "One Man's Religion/The Pinotti Papers" at La MaMa in 1975.[5]He won a Robert Chesley Award in 2003. `;
  return (
    <>
      <Post
        title={post.title}
        keyword={post.keyword}
        timestamp={post.timestamp}
        text={post.text}
      />
      <CommentSection />
    </>
  );
}
