// Component for the final community selection and share button

export default function Buttons({ communities, setSelectedCommunity, values }) {

  // Set the selected community

  const handleChange = (event) => {
    const selectedCommunity = event.target.value;
    const [id, name] = selectedCommunity.split(',');

    const community = {
      community_id: id,
      community_name: name
    }

    setSelectedCommunity(community);
  };

  return (
    <section className="flex flex-col sm:flex-row gap-4">
      <select onChange={handleChange} className="p-2 bg-black rounded-[5px]">
        <option className="text-black">Select Community</option>
        {communities.map((community, index) => (
          <option key={index} value={`${community.id},${community.name}`}>{community.name}</option>
        ))}
      </select>
      <button type="submit" className="py-2 px-5 bg-black rounded-[5px]">Share</button>
    </section>
  )
}