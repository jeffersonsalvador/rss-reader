<?php

namespace App\Controllers;

class RssController
{

    public function home() {

        $exclude = $this->getExcludeWords();
        $url = 'https://www.theregister.co.uk/software/headlines.atom';
        $rss = simplexml_load_file($url);
        $words = [];
        foreach($rss->entry as $item):
            $newWords = explode(' ', strtolower( str_replace( ['\'', '"', '.', ';', ',', '…'], '', strip_tags( $item->summary ) ) ) );
            $words = array_merge($words, $newWords);
        endforeach;

        // count repeated values
        $repeatedWords = array_count_values($words);
        // sort by quantities
        arsort($repeatedWords);
        // exclude wiki words
        $counter = 0;
        $newWordsList = [];
        foreach ($repeatedWords as $key => $value):
            if (!$key) {
                continue;
            }
            if ($counter == 10) {
                continue;
            }
            if (!in_array($key, $exclude)) {
                $newWordsList[$key] = $value;
                $counter++;
            }
        endforeach;

        return json_encode($newWordsList);


    }

    public function getExcludeWords() {

        $url = 'https://en.wikipedia.org/wiki/Most_common_words_in_English';
        $dom = new \DOMDocument();
        $dom->loadHTML(file_get_contents($url));
        $counter = 0;
        $words = [];
        foreach($dom->getElementsByTagName('tr') as $element) {
            if ($element->getElementsByTagName('td')[0]) {
                if ($counter == 50) {
                    continue;
                }
                $words []= $element->getElementsByTagName('td')[0]->textContent;
                $counter++;
            }
        }
        return $words;

    }
}
