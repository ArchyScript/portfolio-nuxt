// format date
export const formatDateAndTime = (inputDate: string) => {
  // Create a Date object from the input date string
  const date = new Date(inputDate)

  // Format the date to 'Month Day, Year'
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  // Format the time to 'hh:mm:ss'
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    // second: '2-digit',
  })

  // Combine the formatted date and time
  return `${formattedDate} - ${formattedTime}`
}

export const pasteHandler = (event: Event) => {
  event.preventDefault() // Prevent the default paste behavior
  const clipboardData =
    (event as ClipboardEvent).clipboardData || window?.clipboardData
  const pastedText = clipboardData.getData("text/plain")
  // Do whatever validation or processing you need to do with the pasted text
}

export const formatNumber = (num: any) => {
  if (!num || num == undefined) return 0

  const value = parseFloat(num).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return value
}

export const copyToClipboard = (text: string) => {
  // Create a text area element to hold the text you want to copy
  const textarea = document.createElement("textarea")
  textarea.value = text
  document.body.appendChild(textarea)

  // Select the text within the text area
  textarea.select()

  try {
    // Attempt to copy the selected text to the clipboard
    document.execCommand("copy")
  } catch (err) {
    console.error("Unable to copy text to clipboard:", err)
  } finally {
    // Remove the temporary text area element
    document.body.removeChild(textarea)
  }
}
export const dropHandler = (event: Event) => {
  event.preventDefault() // Prevent the default drop behavior
}

type ObjectType = { [key: string]: any }

const generateTypesFromObject = <T extends ObjectType>(
  obj: T,
  typeName: string = "GeneratedType"
): string => {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("Input must be a valid object.")
  }

  const typeProperties: string[] = []

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key as keyof T]
      const valueType = typeof value

      let propertyType: string

      if (valueType === "string") {
        propertyType = "string"
      } else if (valueType === "number") {
        propertyType = "number"
      } else if (valueType === "boolean") {
        propertyType = "boolean"
      } else if (Array.isArray(value)) {
        const arrayItemType = value.length > 0 ? typeof value[0] : "any"
        propertyType = `${arrayItemType}[]`
      } else if (valueType === "object" && value !== null) {
        propertyType = generateTypesFromObject(value, `${typeName}_${key}`)
      } else {
        propertyType = "any"
      }

      typeProperties.push(`${key}: ${propertyType};`)
    }
  }

  return `type ${typeName} = {\n  ${typeProperties.join("\n  ")}\n};`
}

export const saveToStorage = (key: string, value: any) => {
  let valueToBeStored = JSON.stringify(value)
  return window.localStorage.setItem(key, valueToBeStored)
}

export const getFromStorage = (key: string) => {
  if (process.client && typeof window !== "undefined") {
    const storedValue = window.localStorage.getItem(key)

    if (!storedValue) return storedValue

    return JSON.parse(storedValue)
  }

  return null
}

export const removeFromStorage = (key: string) =>
  window.localStorage.removeItem(key)

export const toLowerCase = (str: string) => String(str || "").toLowerCase()
