import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-700 w-full text-sm">
        <thead className="bg-gray-100 text-center">
          <tr>
            <th className="border border-gray-700 px-4 py-2 font-semibold">DMPC</th>
            <th className="border border-gray-700 px-4 py-2 font-semibold">Date</th>
            <th className="border border-gray-700 px-4 py-2 font-semibold">Opération</th>
            <th className="border border-gray-700 px-4 py-2 font-semibold">Mères</th>
            <th className="border border-gray-700 px-4 py-2 font-semibold">Fille</th>
            <th className="border border-gray-700 px-4 py-2 font-semibold">Auteur</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr className="text-center">
            <td className="border border-gray-700 px-4 py-2 align-middle">0480</td>
            <td className="border border-gray-700 px-4 py-2 align-middle">14/10/1992</td>
            <td className="border border-gray-700 px-4 py-2 align-middle">Division</td>
            <td className="border border-gray-700 px-4 py-2 align-middle">AC 23</td>
            <td className="border border-gray-700 px-4 py-2 align-middle">
              AC 27 <br /> AC 28 <br /> AC 29 <br /> AC 30 <br /> AC 31 <br /> AC 32 <br /> AC 33 <br /> AC 34
            </td>
            <td className="border border-gray-700 px-4 py-2 align-middle">JAGOT</td>
          </tr>

          {/* Row 2 */}
          <tr className="text-center">
            <td className="border border-gray-700 px-4 py-2 align-middle">0481</td>
            <td className="border border-gray-700 px-4 py-2 align-middle">14/10/1992</td>
            <td className="border border-gray-700 px-4 py-2 align-middle">Division</td>
            <td className="border border-gray-700 px-4 py-2 align-middle">AC 1</td>
            <td className="border border-gray-700 px-4 py-2 align-middle">
              AC 35 <br /> AC 36 <br /> AC 37 <br /> AC 38 <br /> AC 39 <br /> AC 40
            </td>
            <td className="border border-gray-700 px-4 py-2 align-middle">JAGOT</td>
          </tr>

          {/* Row 3 */}
          <tr className="text-center">
            <td className="border border-gray-700 px-4 py-2 align-middle">0499</td>
            <td className="border border-gray-700 px-4 py-2 align-middle">07/07/1993</td>
            <td className="border border-gray-700 px-4 py-2 align-middle">Réunion</td>
            <td className="border border-gray-700 px-4 py-2 align-middle">
              AC 28 <br /> AC 30 <br /> AC 32
            </td>
            <td className="border border-gray-700 px-4 py-2 align-middle">AC 48</td>
            <td className="border border-gray-700 px-4 py-2 align-middle">JAGOT</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
