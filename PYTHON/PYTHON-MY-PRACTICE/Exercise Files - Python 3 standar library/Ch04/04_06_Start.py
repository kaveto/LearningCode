# Text Wrap Module
import textwrap

websiteText = """   Learning can happen anywhere with our apps on your computer,
mobile device, and TV, featuring enhanced navigation and faster streaming
for anytime learning. Limitless learning, limitless possibilities."""

print("No Dedent:")
print(textwrap.fill(websiteText))

print("Dedent")
dedent_text = textwrap.dedent(websiteText).strip()
print(dedent_text)

print("Fill")
print(textwrap.fill(dedent_text, width=50))

print("Controlling Indent")
print(textwrap.fill(dedent_text, width=50, initial_indent="    ", subsequent_indent="    "))

print("Shortening Text")
print(textwrap.shorten(dedent_text, width=15, placeholder="..."))