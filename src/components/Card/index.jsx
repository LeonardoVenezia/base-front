import { HandThumbUpIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

const Card = ({ text, vote, votedByYou, mostVoted, color }) => {
  return (
    <div className={`card text-primary-content shadow-lg mb-4 ${color} bg-opacity-65`}>
      <div className="card-body pb-4 relative">
        <p className="pb-4">{text}</p>
        <div className="card-actions justify-between">
          <div>
            <button className="mr-2">
              <TrashIcon className="w-5 h-5 text-error" />
            </button>
            <button>
              <PencilSquareIcon className="w-5 h-5 text-grey" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button>
              <HandThumbUpIcon className={`w-5 h-5 ${votedByYou ? 'text-success' : 'text-accent'}`} />
            </button>
            <span>{vote}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
