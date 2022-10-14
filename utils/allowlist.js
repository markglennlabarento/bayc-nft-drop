export const useAllowlist = () => {
    /**
     * Check is user in the allowlist
     * @param {string} address Current connected wallet address.
     * @returns {boolean} Return `true` if user is in the allowlist, else `false`.
     */
    const checkAllowlist = async (address) => {
        const response = await fetch('/api/check-allowlist', {
            method: 'POST',
            body: JSON.stringify({ address }),
        })
        const { inAllowlist } = await response.json()

        return inAllowlist
    }

    /**
     * Add user to the allowlist
     * @param {string} address Current connected wallet address.
     * @returns {boolean} Return `true` if user is added to the allowlist, else `false`.
     */
    const joinAllowlist = async (address) => {
        const response = await fetch('/api/add-allowlist', {
            method: 'POST',
            body: JSON.stringify({ address }),
        })

        const { success } = await response.json()

        if (success) return true

        return false
    }

    return {
        join: joinAllowlist,
        check: checkAllowlist,
        update: updateAllowlist
    }
}    