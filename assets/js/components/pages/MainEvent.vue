<template>
  <div class="grid grid-cols-12 w-full">
    <div class="col-span-12 border-b h-[81px] top-0 sticky bg-white z-10">
      <div class="flex flex-row justify-center items-center relative h-full">
        <div class="absolute flex top-8 left-8">
          <h1 class="text-gray-300 text-lg font-bold">
            Showing 1-6 of 6 results
          </h1>
        </div>
        <div class="flex relative">
          <img src="images/Search.svg" class="cursor-pointer z-0 -mr-7" />
          <input
            type="text"
            value="Search"
            class="bg-gray-100 py-1 pl-8 rounded w-80"
          />
          <img src="images/Close_round.svg" class="cursor-pointer z-0 -ml-7" />
        </div>
        <img
          src="images/Import.svg"
          class="h-12 w-auto p-2 cs-gray absolute right-4 cursor-pointer"
        />
      </div>
    </div>
    <div class="col-span-12">
      <table class="w-full">
        <tr class="h-16 bg-gray-100 border-b">
          <th class="text-gray-400 text-left text-sm pl-8">Txn Hash</th>
          <th class="text-gray-400 text-left text-sm pl-8">Service</th>
          <th class="text-gray-400 text-left text-sm pl-8">Analytics</th>
          <th class="text-gray-400 text-left text-sm pl-8">Method</th>
          <th class="text-gray-400 text-left text-sm pl-8">From</th>
          <th class="text-gray-400 text-left text-sm pl-8">To</th>
          <th class="text-gray-400 text-left text-sm pl-8">Unit/n</th>
          <th class="text-orange-400 text-left text-sm pl-8">Cost/n</th>
        </tr>
        <tr class="bg-gray-50 border-b">
          <td class="text-orange-400 text-left text-xs font-medium pl-8">
            0xcECcf04a079b85D27Fd4932647...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Đaccounting
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            <img
              src="images/Line_up.svg"
              class="h-6 w-auto cs-orange cursor-pointer"
            />
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Execute
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0x6e5c888b744cce1dae...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Binance
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">Eth</td>
          <td class="text-gray-400 text-left text-xs font-medium pl-8">
            n(eth)
          </td>
        </tr>

        <tr class="bg-gray-50 border-b">
          <td class="text-orange-400 text-left text-xs font-medium pl-8">
            0xe4t4g54g9tbe3n7f4723c44574b...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            ServiceType 1
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            <img
              src="images/Line_up.svg"
              class="h-6 w-auto cs-orange cursor-pointer"
            />
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Execute
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0x6e5c888b744cce1dae...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Ribbon Finance
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">Bzz</td>
          <td class="text-gray-400 text-left text-xs font-medium pl-8">
            k(bzz)
          </td>
        </tr>
        <tr class="bg-gray-50 border-b">
          <td class="text-orange-400 text-left text-xs font-medium pl-8">
            0xor458vh3435tn353v63v343bvb...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            ServiceType 1
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            <img
              src="images/Line_up.svg"
              class="h-6 w-auto cs-orange cursor-pointer"
            />
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Execute
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Binance 18
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xf554zh56j545t45tl...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">Eth</td>
          <td class="text-gray-400 text-left text-xs font-medium pl-8">
            n(eth)
          </td>
        </tr>
        <tr class="bg-gray-50 border-b">
          <td class="text-orange-400 text-left text-xs font-medium pl-8">
            0xk64g435b784b7v5v5v65643dfs...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            ServiceType 1
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            <img
              src="images/Line_up.svg"
              class="h-6 w-auto cs-orange cursor-pointer"
            />
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Execute
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0x6e5c888b744cce1dae...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Ribbon Finance
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Erc-20(1)
          </td>
          <td class="text-gray-400 text-left text-xs font-medium pl-8">
            I(erc-20(1))
          </td>
        </tr>
        <tr class="bg-gray-50 border-b">
          <td class="text-orange-400 text-left text-xs font-medium pl-8">
            0xr4763ff55g5v22jz343ng34j6asd...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            ServiceType 1
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            <img
              src="images/Line_up.svg"
              class="h-6 w-auto cs-orange cursor-pointer"
            />
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Execute
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Coinbase 5
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xf554zh56j545t45tl...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Erc-20(1)
          </td>
          <td class="text-gray-400 text-left text-xs font-medium pl-8">
            I(erc-20(1))
          </td>
        </tr>
        <tr class="bg-gray-50 border-b">
          <td class="text-orange-400 text-left text-xs font-medium pl-8">
            0xc7g30ng5h64bk83n3vnvvhr24f3...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            ServiceType 1
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            <img
              src="images/Line_up.svg"
              class="h-6 w-auto cs-orange cursor-pointer"
            />
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Execute
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0x6e5c888b744cce1dae...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xf554zh56j545t45tl...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Erc-20(2)
          </td>
          <td class="text-gray-400 text-left text-xs font-medium pl-8">
            m(erc-20(2))
          </td>
        </tr>
        <tr class="bg-gray-50 border-b">
          <td class="text-orange-400 text-left text-xs font-medium pl-8">
            0xct38g74h45n4n45v56vxx56vh74...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Wallet
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            <img
              src="images/Line_up.svg"
              class="h-6 w-auto cs-orange cursor-pointer"
            />
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Withdraw
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xt73hg45bj2j4jtjkmnrge...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xf554zh56j545t45tl...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Erc-20(3)
          </td>
          <td class="text-gray-400 text-left text-xs font-medium pl-8">
            p(erc-20(3))
          </td>
        </tr>
        <tr class="bg-gray-50 border-b">
          <td class="text-orange-400 text-left text-xs font-medium pl-8">
            0xfg32t93f2h4m5dr572bf3j4z3gr2...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            ServiceType 2
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            <img
              src="images/Line_up.svg"
              class="h-6 w-auto cs-orange cursor-pointer"
            />
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Execute
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xp43jvb3b23bfb99439...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xf554zh56j545t45tl...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">Eth</td>
          <td class="text-gray-400 text-left text-xs font-medium pl-8">
            n(eth)
          </td>
        </tr>
        <tr class="bg-gray-50 border-b">
          <td class="text-orange-400 text-left text-xs font-medium pl-8">
            0xcr2n3nv533nv38j7gcfd53gbfjs44...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            ServiceType 2
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            <img
              src="images/Line_up.svg"
              class="h-6 w-auto cs-orange cursor-pointer"
            />
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Execute
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xq36jb8e63487g34b44...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xf554zh56j545t45tl...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">Bzz</td>
          <td class="text-gray-400 text-left text-xs font-medium pl-8">
            m(erc-20(2))
          </td>
        </tr>
        <tr class="bg-gray-50 border-b">
          <td class="text-orange-400 text-left text-xs font-medium pl-8">
            0xbu4352832f5g69v37vcbuj5jhf27...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            ServiceType 2
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            <img
              src="images/Line_up.svg"
              class="h-6 w-auto cs-orange cursor-pointer"
            />
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Execute
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xz2338v3n904vb5467g...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xf554zh56j545t45tl...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Erc-20(2)
          </td>
          <td class="text-gray-400 text-left text-xs font-medium pl-8">
            p(erc-20(3))
          </td>
        </tr>
        <tr class="bg-gray-50 border-b">
          <td class="text-orange-400 text-left text-xs font-medium pl-8">
            0xi84ig5n3bvyat4fhg32f453z4563...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            ServiceType 2
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            <img
              src="images/Line_up.svg"
              class="h-6 w-auto cs-orange cursor-pointer"
            />
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Execute
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xar4335z45h45g35422...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            0xf554zh56j545t45tl...
          </td>
          <td class="text-gray-800 text-left text-xs font-medium pl-8">
            Erc-20(3)
          </td>
          <td class="text-gray-400 text-left text-xs font-medium pl-8">
            p(erc-20(3))
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
</script>
