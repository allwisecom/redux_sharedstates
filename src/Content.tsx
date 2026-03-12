import { useAppContext } from './AppContext';

type Props = {
  permissions: undefined | string[];
};

export function Content() {
  //{ permissions }: Props
  const { permissions } = useAppContext();
  if (permissions === undefined) {
    return (
      <div className="p-6 mt-4 bg-gray-100 rounded">
        <h2>Content</h2>
        <p>Please sign in to view this content.</p>
      </div>
    );
  }
  return permissions.includes('admin') ? (
    <div className="p-6 mt-4 bg-gray-100 rounded">
      <h2>Content</h2>
      <p>Permissions: {permissions?.join(', ')}</p>
    </div>
  ) : null;
}
